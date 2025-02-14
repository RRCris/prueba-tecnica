export function getRangeDate(from: string, to: string) {
  const fecha1 = new Date(from + " GMT-0500");
  const fecha2 = new Date(to + " GMT-0500");
  const mes1 = fecha1.toLocaleString("es-ES", { month: "long" }).toUpperCase();
  const mes2 = fecha2.toLocaleString("es-ES", { month: "long" }).toUpperCase();
  const dia1 = fecha1.getDate();
  const dia2 = fecha2.getDate();
  console.log(mes1);
  if (mes1 === mes2) {
    return `${dia1} AL ${dia2} DE ${mes1}`;
  }
  const mes1Number = fecha1.toLocaleString("es-ES", { month: "numeric" }).toUpperCase();
  const mes2Number = fecha2.toLocaleString("es-ES", { month: "numeric" }).toUpperCase();
  return `${dia1}/${mes1Number} - ${dia2}/${mes2Number}`;
}
