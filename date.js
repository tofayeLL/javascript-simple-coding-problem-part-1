
const today = Date();
const date = new Date(2067-9-9);
console.log(date);
console.log(date.getDate());
console.log(date.getDay());

const specificDate = new Date(2090, 3, 20)
console.log(specificDate);
// set new month
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));



// unix epoc ----eta diye somoyer difference kora hoy for ex- 1 weeker difference or 1970 theke 2024 er somoy er difference 