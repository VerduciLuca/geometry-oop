const point1 = new Point(3,4)
console.log(point1);

const segment1 = new Segment (1,1,4,5)

console.log(segment1);
console.log(segment1.length);

const triangle1 = new Triangle(1,1,4,5,4,1)

console.log(triangle1);
console.log(triangle1.perimeter);

const client1 = new Client ('pippo','plutozzi','via pippis 5')

console.log(client1.toString());

const employee1 = new Employee ('rykard', 'lord della blasfemia','mensa degli dei')

console.log(employee1.toString());

//crea uno student automizer, che randomizza le coppie con classe Student. classe Corso con array di studenti (è qui che avviene la randomizzata), funziona printa coppie
// 1) creare classe studetn con toString
// 2) creare classe classroom che contiene array di studenti
// 3) aggiungere a classroom tre metodi:
//      -addStudent()
//      -randomizeStudents()
//      -printSquads ()

