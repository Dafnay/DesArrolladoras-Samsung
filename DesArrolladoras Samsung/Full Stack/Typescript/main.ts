import { Address } from "./address";
import { Mail } from "./mail";
import { Person } from "./person";
import { Phone } from "./phone";

let personas: Person[] = [];

personas.push(new Person(
    "Alba",
    "Velasco González",
    36,
    "71662168X",
    "24/08/1986",
    "verde",
    "mujer",
    new Address(
        "Daniel Moyano",
        6,
        1,
        "A",
        33011,
        "Oviedo",
        "Asturias"
    ),
    new Mail(
        "Casa",
        "alba_r_velasco@hotmail.com"
    ),
    new Phone(
        "Trabajo",
        629978616
    ),
    "Contactar únicamente de 8 a 16h"
));

personas.push(new Person(
    "Angel",
    "Martínez Fernández",
    38,
    "71664887S",
    "29/07/1984",
    "azul",
    "hombre",
    new Address(
        "Plaza Pueblo de Madrid",
        11,
        1,
        "Derecha",
        33011,
        "Colloto",
        "Asturias"
    ),
    new Mail(
        "Personal",
        "fangelmanuelmartinez@gmail.com"
    ),
    new Phone(
        "Trabajo",
        649549342
    ),
    ""
));

personas.push(new Person(
    "Maria",
    "Velasco González",
    57,
    "52581116A",
    "19/103/1966",
    "morado",
    "mujer",
    new Address(
        "Otero",
        12,
        1,
        "I",
        33008,
        "Oviedo",
        "Asturias"
    ),
    new Mail(
        "Personal",
        "mjvelasco@hotmail.com"
    ),
    new Phone(
        "Personal",
        678521001
    ),
    "Vacaciones en agosto"
));

let personaFiltrada: Person = personas.filter(a => a.dni == "71664887S")[0];

let nuevaDireccion: Address = new Address("Daniel moyano", 6, 1, "A", 33011, "Oviedo", "Asturias");

personaFiltrada.direcciones.pop();
personaFiltrada.direcciones.push(nuevaDireccion);

let nuevoMail: Mail = new Mail("Trabajo","angelmf@gmail.com");

personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);

let nuevoTelefono: Phone = new Phone("Casa", 985232823);

personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);

for(let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
