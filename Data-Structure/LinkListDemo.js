class Node {
    constructor(element) {
        this.element = element; //Store data value
        this.next = null; // Store refrence of next element
    }

}

class LinkedList {
    constructor() {
        this.head = null; // Store first node of list
        this.size = 0; // stroe size of list
    }
    /*---Function need
    --add(element)
    --isnertAt(location, element)
    --removeFrom(location)
    --removeElement(eleement)
    --------*/

    /*---Helper function----
    ->isEmpty
    ->SizeOfList
    ->PrintList
    --*/

    add(eleement) {
        // create new node
        var node = new Node(eleement);
        // to store current node
        var current;
        // check list is empty then add element and make head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Insert element at index
    insertAt(eleement, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter a valid index");
        } else {
            var node = new Node(eleement);
            var curr, prev;
            curr = this.head;

            //Add at first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // Add element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    //Remove form index
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Please enter a vaild index");

        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //remove element
                prev.next = curr.next;
            }
            this.size--;
            return curr.eleement;

        }
    }
    removeElement(eleement) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            //comparing element with current element if found then remove 
            //then and return true
            if (current.eleement === eleement) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.eleement;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    //Helper function
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }


}