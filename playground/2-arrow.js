const square = (x) => x * x
console.log(square(2))

const event = {
    name: 'Jo',
    FamilyName: ['test1','test2','test3'],
    printList(){
        console.log('List: ' + this.name)
        this.FamilyName.forEach((guest) => {
             console.log(guest + ' is Attending ' + this.name)
        })
    }
}
event.printList()