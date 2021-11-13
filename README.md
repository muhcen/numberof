# numberof

numberof is a javascript library for count the word in string.

## Installation

Use the package manager npm to install foobar.

```bash
npm install numberof
```

## Usage

```python
const numberof = require('numberof')

numberof('word','o') => 1

numberof('javascript is not java','ja') => 2

numberof('water wather whater water whter water Water' 'water') => 3

numberof('water wather whater water whter water Water' , 'water',{ insensitive:true }) => 4

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://opensource.org/licenses/ISC)
