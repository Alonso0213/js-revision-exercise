// Question 1
let people=[
    {
        firstName: 'Alonso',
        lastname: 'cupido',
        age:'19'
    },
    {
        firstName: 'Amy',
        lastname: 'Pieters',
        age:'23'
    },
    {
        firstName: 'Siyamthanda',
        lastname: 'Mazokwana',
        age:'24'
    },
    {
        firstName: 'Jason',
        lastname: 'Barron',
        age:'23'
    },
    {
        firstName: 'Jason',
        lastname: 'Viljoen',
        age:'24'
    },
    {
        firstName: 'Keeno',
        lastname: 'Fourie',
        age:'18'
    },
    {
        firstName: 'Logan',
        lastname: 'Thomas',
        age:'23'
    },
    {
        firstName: 'Mish-al',
        lastname: 'Taliep',
        age:'21'
    },
    {
        firstName: 'Thotyelwa',
        lastname: 'Mpongwana',
        age:'23'
    },
]
console.log(people);

// Question 2/3
let person1={
    firstName: 'Alonso',
        lastname: 'cupido',
        age:'19'
}
let person2={
    firstName: 'Amy',
    lastname: 'Pieters',
    age:'23'
}
let person3={
    firstName: 'Siyamthanda',
        lastname: 'Mazokwana',
        age:'24'
}
let person4={
    firstName: 'Jason',
    lastname: 'Barron',
    age:'23'
}
let person5={
    firstName: 'Jason',
    lastname: 'Viljoen',
    age:'24'
}
let person6={
    firstName: 'Keeno',
    lastname: 'Fourie',
    age:'18'
}
let person7={
    firstName: 'Logan',
    lastname: 'Thomas',
    age:'23'
}
let person8={
    firstName: 'Mish-al',
    lastname: 'Taliep',
    age:'21'
}
let person9={
    firstName: 'Thotyelwa',
    lastname: 'Mpongwana',
    age:'23'
}
const displayElement = document.querySelector('#info')
console.log(displayElement); displayElement.innerHTML+=`
<tr>
<td>${person1.firstName}  </td>
<td> ${person1.lastname}  </td>
<td>${person1.age}  </td>
</tr>

<tr>
<td>${person2.firstName}  </td>
<td> ${person2.lastname}  </td>
<td>${person2.age}  </td>
</tr>

<tr>
<td>${person3.firstName}  </td>
<td> ${person3.lastname}  </td>
<td>${person3.age}  </td>
</tr>

<tr>
<td>${person4.firstName}  </td>
<td> ${person4.lastname}  </td>
<td>${person4.age}  </td>
</tr>

<tr>
<td>${person5.firstName}  </td>
<td> ${person5.lastname}  </td>
<td>${person5.age}  </td>
</tr>

<tr>
<td>${person6.firstName}  </td>
<td> ${person6.lastname}  </td>
<td>${person6.age}  </td>
</tr>

<tr>
<td>${person7.firstName}  </td>
<td> ${person7.lastname}  </td>
<td>${person7.age}  </td>
</tr>

<tr>
<td>${person8.firstName}  </td>
<td> ${person8.lastname}  </td>
<td>${person8.age}  </td>
</tr>

<tr>
<td>${person9.firstName}  </td>
<td> ${person9.lastname}  </td>
<td>${person9.age}  </td>
</tr>
`















// let person = {
//     name: 'Seth',
//     surname: 'Kallis',
//     age:22
// }
// displayElement.innerHTML = `
// <tr>
//     <td>${person.name}</td>
//     <td>${person.surname}</td>
//     <td>23</td>
// </tr>`