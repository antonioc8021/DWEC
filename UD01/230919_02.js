// ejemplo fatídico de que no hacer, pq el recolector de basura se lo carga. pero si lo haces con var furula.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let j = 0; j < 100; j++) {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (let j = 0; j < 100; j++) {
    console.log(i);
}
