class Item {
  constructor(item) {
    this.name = item,
      this.previousItem = null,
      this.nextItem = null

  }
}

class DoubleList {
  constructor() {
    this.list = []
  }

  addItem(item) {
    let newItem = new Item(item);
    this.list = [...this.list, newItem]
    if (this.list.length !== 1) {
      this.list.forEach(element => {
        let elementIndex = this.list.indexOf(element)
        if (this.list[elementIndex + 1]) {
          let nextItem = this.list[elementIndex + 1]
          element.nextItem = nextItem.name
        } else {
          element.nextItem = this.list[0].name
        }
        if (this.list[elementIndex - 1]) {
          let previousItem = this.list[elementIndex - 1]
          element.previousItem = previousItem.name
        }
        if (!elementIndex) {
          let lastItem = this.list.slice(-1)[0]
          element.previousItem = lastItem.name
        }
      });
    }
    //console.log(`New Item added to list! ${newItem.name}`)
  }

  // findFirstItem(item) {
  //   for (let i = 0; this.list.length > i; i++) {
  //     if (this.list[i].nextItem === item) {
  //       console.log(`Found item '${item}' at ${i + 1} index of list:`)
  //       console.log(this.list[i + 1])
  //       break
  //     } else {
  //       if (this.list[i].nextItem == null) {
  //         if (this.list[0].name === item) {
  //           console.log(`Found item '${item}' at 0 index of list:`)
  //           console.log(this.list[0])
  //           break
  //         }
  //         else {
  //           console.log(`Sorry could not find '${item}' in this list!`)
  //           break
  //         }
  //       }
  //     }
  //   }
  // }

  removeLastItem() {
    // TODO work on this next
    this.list.splice(-1, 1)
    if (this.list.length !== 0) {
      this.list[0].previousItem = this.list.slice(-1)[0].name
      this.list.slice(-1)[0].nextItem = this.list[0].name
      console.log(`Last item removed. List pointers altered`)
      this.listItems()
    }
  }

  listItems() {
    console.log(`LISTING ITEMS....`)
    console.log(this.list)
    console.log(`This list has ${this.list.length} items in it.`)
  }
}

let myDoubleList = new DoubleList
myDoubleList.addItem('First!')
myDoubleList.addItem('Hello')
myDoubleList.addItem('Goodbye')
myDoubleList.addItem('Wow')
myDoubleList.addItem('Cheese')
myDoubleList.addItem('Sherlock')
myDoubleList.addItem('Jojo')
// myDoubleList.findFirstItem('Hello')
// myDoubleList.findFirstItem('RandoIto')
myDoubleList.listItems()
myDoubleList.removeLastItem()
// myDoubleList.removeLastItem()
// myDoubleList.removeLastItem()
// myDoubleList.findFirstItem('Hello')
// myDoubleList.findFirstItem('Wow')

