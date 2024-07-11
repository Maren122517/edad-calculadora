// Años de edad
function calculateAge(birthDate: string): number {
    // Convertir la fecha de nacimiento a un objeto Date
    const fechaNac: Date = new Date(birthDate);
  
    // Obtener la fecha actual
    const hoy: Date = new Date();
  
    // Calcular la diferencia de años
    let edad: number = hoy.getFullYear() - fechaNac.getFullYear();
  
    // Verificar si el mes y día actual es menor que el mes y día de nacimiento, en cuyo caso, se resta un año a la edad
    const mes: number = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;
}
const birthDate: string = "1998-12-30";
console.log(`La edad es: ${calculateAge(birthDate)}`);
  