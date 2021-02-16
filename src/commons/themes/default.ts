export default {
  // Alert
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-green-50 text-green-900 dark:bg-green-600 dark:text-white',
    danger: 'bg-red-50 text-red-900 dark:bg-red-600 dark:text-white',
    warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white',
    neutral: 'bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    info: 'bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white',
    icon: {
      base: 'h-5 w-5',
      success: 'text-green-400 dark:text-green-300',
      danger: 'text-red-400 dark:text-red-300',
      warning: 'text-yellow-400 dark:text-yellow-100',
      neutral: 'text-gray-400 dark:text-gray-500',
      info: 'text-blue-400 dark:text-blue-300',
    },
  },
  // Card
  card: {
    base: 'min-w-0 rounded-lg shadow-xs overflow-hidden',
    default: 'bg-white dark:bg-gray-800',
  },
  cardBody: {
    base: 'p-4',
  },
  // Button
  button: {
    base:
      'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-10 py-4 rounded-lg',
      large: 'px-5 py-3 rounded-lg',
      regular: 'px-4 py-2 rounded-lg text-sm',
      small: 'px-3 py-1 rounded-md text-sm',
      icon: {
        larger: 'p-4 rounded-lg',
        large: 'p-3 rounded-lg',
        regular: 'p-2 rounded-lg',
        small: 'p-2 rounded-md',
      },
      pagination: 'px-3 py-1 rounded-md text-xs',
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: 'text-white bg-purple-600 border border-transparent',
      active:
        'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base:
        'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
      active:
        'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    link: {
      base:
        'text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
      active:
        'active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base:
        'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200',
    },
  },
};
