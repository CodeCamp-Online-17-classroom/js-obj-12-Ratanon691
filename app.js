const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};
function findEmployee() {
let name = prompt(`Whose info you'd like to know?`)
if(name in employees){
  let employee = employees[name]
    console.log(`Name: ${name}, salary: ${employee.salary}, address: ${employee.address.district}, ${employee.address.province}`)
  } else {
    console.log("Not Found")
  }
}
