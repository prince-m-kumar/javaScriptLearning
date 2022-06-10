class Node{
    constructor(element){
        this.element = element; //Store data value
        this.next = null; // Store refrence of next element
    }

}

class LinkedList{
    constructor(){
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

    add(eleement){
        // create new node
        var node = new Node(eleement);
        // to store current node
        var current;
        // check list is empty then add element and make head
        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(eleement,index){
        if(index <0 || index >this.size){
            return console.log("Please enter a valid index");
        }else{
            var node = new Node(eleement);
            var curr, prev;
            curr = this.head;
            
            //Add at first index
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
                curr = this.head;
                var it =0;
                while(it <index){
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
    

}