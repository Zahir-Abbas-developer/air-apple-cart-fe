import React, { useEffect, useMemo, useState } from 'react';

import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import { Controller } from 'react-hook-form';
import { styles } from './SearchableSelect.style';

import { isNullOrEmpty } from '@/utils';

import {
  DropdownDataPropsI,
  SearchableSelectPropsI,
} from './SearchableSelect.interface';

import { ArrowDownIcon } from '@/assets/icons';

const SearchableSelect: React.FC<SearchableSelectPropsI> = ({
  dropdownData,
  renderOption,
  name,
  control,
  rules,
  label,
  height,
  multiple = false,
}) => {
  const [isSearchableSelect, setIsSearchableSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const [isMultiple, setIsMultiple] = useState(multiple);

  useEffect(() => {
    setIsMultiple(multiple);
  }, [multiple]);

  const selectOptions = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return dropdownData.filter((option: DropdownDataPropsI) => {
      for (const key in option) {
        if (
          typeof option[key] === 'string' &&
          option[key].toLowerCase().includes(query)
        ) {
          return true;
        }
      }
      return false;
    });
  }, [dropdownData, searchQuery]);

  const handleSearchFieldClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCheckboxChange = (item: any) => {
    const index = selectedItems.indexOf(item);
    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((label) => label !== item));
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <Typography
            variant="h6"
            mt={1}
            style={{ color: theme?.palette.grey[600] }}
          >
            {label}
          </Typography>
          <Box sx={{ width: '100%', position: 'relative', zIndex: '2' }}>
            <TextField
              id={name}
              variant="outlined"
              contentEditable={false}
              onClick={() => setIsSearchableSelect(!isSearchableSelect)}
              sx={styles.textareaSearchDropdown(height)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDownIcon />
                  </InputAdornment>
                ),
              }}
              error={fieldState.invalid}
              helperText={fieldState.error?.message || ''}
              {...field}
            />
            <Box
              sx={styles.renderText}
              onClick={() => setIsSearchableSelect(!isSearchableSelect)}
            >
              {selectedItems.length
                ? selectedItems
                  ? selectedItems.map((item: any) => item.label).join(', ')
                  : 'Select'
                : field?.value
                ? field.value.label
                : 'Select'}
            </Box>
            {isSearchableSelect && (
              <Box sx={styles.wrapperSearchDropdown}>
                <TextField
                  id={`${name}-search-field`}
                  label=""
                  variant="outlined"
                  placeholder="Search Here"
                  onClick={handleSearchFieldClick}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={styles.searchSelect(theme)}
                />

                {!isNullOrEmpty(selectOptions) &&
                  selectOptions.map((item: any) => (
                    <MenuItem key={item.id}>
                      {isMultiple ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedItems.includes(item)}
                              onChange={() => (
                                handleCheckboxChange(item),
                                field.onChange(selectedItems)
                              )}
                            />
                          }
                          label={renderOption(item)}
                        />
                      ) : (
                        <MenuItem
                          value={item.id}
                          onClick={() => {
                            field.onChange(item);
                            setIsSearchableSelect(false);
                          }}
                          sx={{ padding: '0px', width: '100%' }}
                        >
                          {renderOption(item)}
                        </MenuItem>
                      )}
                    </MenuItem>
                  ))}
              </Box>
            )}
          </Box>
        </>
      )}
    />
  );
};

export default SearchableSelect;
