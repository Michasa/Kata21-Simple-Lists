class Item {
  constructor(item) {
    this.name = item,
      this.nextItem = null
  }
}

class SingleList {
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
        }
      });
    }
    console.log(`New Item added to list! ${newItem.name}`)
  }

  findFirstItem(item) {
    for (let i = 0; this.list.length > i; i++) {
      if (this.list[i].nextItem === item) {
        console.log(`Found item '${item}' at ${i + 1} index of list:`)
        console.log(this.list[i + 1])
        break
      } else {
        if (this.list[i].nextItem == null) {
          if (this.list[0].name === item) {
            console.log(`Found item '${item}' at 0 index of list:`)
            console.log(this.list[0])
            break
          }
          else {
            console.log(`Sorry could not find '${item}' in this list!`)
            break
          }
        }
      }
    }
  }

  removeLastItem() {
    this.list.splice(-1, 1)
    if (this.list.length !== 0) {
      let lastItemIndex = this.list.length - 1
      this.list[lastItemIndex].nextItem = null
      console.log(`Last item removed. List pointers altered`)
      this.listItems()
    }
  }

  listItems() {
    console.log(`LISTING ITEMS....`)
    console.log(this.list)

  }
}

// let mySingleList = new SingleList
// mySingleList.addItem('First!')
// mySingleList.addItem('Hello')
// mySingleList.addItem('Goodbye')
// mySingleList.addItem('Wow')
// mySingleList.addItem('Cheese is nice')
// mySingleList.addItem('You don\'t say Sherlock')
// mySingleList.findFirstItem('Hello')
// mySingleList.findFirstItem('RandoIto')