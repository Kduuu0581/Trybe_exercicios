const employeeGenerator = (nomeCompleto) => {
const email = nomeCompleto.toLowerCase().split(' ').join('_');
return {nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('João da Silva'),
        id2: callback('Maria da Silva'),
        id3: callback('José da Silva'),
    }
    return employees;
};
console.log(newEmployees(employeeGenerator));