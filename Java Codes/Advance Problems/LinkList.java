
class Employee {
  private int employeeID;
  private String Fname;
  private String Lname;

  private int branchID;

  private String productType;

  private String productStatus;

  Employee(int id, String fname, String lname, int branchId, String prod_type, String prod_status) {
    employeeID = id;
    Fname = fname;
    Lname = lname;
    branchID = branchId;
    productType = prod_type;
    productStatus = prod_status;
  }

  public int getEmployeeId() {
    return employeeID;
  }

  public String getStatus() {
    return productStatus;
  }

  public String toString() {
    return "BranchID: " + branchID + ", " + "EmpID: " + employeeID + ", " + "Name: " + Fname + " " + Lname + ", "
        + "ProductType " + productType;
  }
}

class EmployeeLinkList {
  private Node head;

  public class Node {
    private Employee employeeObj;
    private Node next;

    public Node getNext() {
      return next;
    }

    public Node setNext(Node n) {
      return next = n.next;
    }
    public Employee getEmployeeObj() {
        return employeeObj;
    }
  }

  public Node getHead() {
    return head;
  }
  public EmployeeLinkList(Employee newObj) {
    head = new Node();
    head.employeeObj = newObj;
    head.next = null;
  }

  public Boolean insertItem(Employee newObj) {
    Node newNode = new Node();

    Node temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    newNode.employeeObj = newObj;
    newNode.next = null;
    temp.next = newNode;
    return true;
  }

  public void printList() {
    if (head == null) {
      System.out.println("The List is empty");
      return;
    }
    Node temp = head;
    System.out.println("The Data of Branches are: ");
    while (temp != null) {
      System.out.println(temp.employeeObj.toString());
      temp = temp.next;
    }
  }

  public boolean deleteItem(int employeeId) {
    if (head.employeeObj.getEmployeeId() == employeeId) {
      head = head.next;
      return true;
    } else {
      Node currentHead = head;
      Node prev = null;

      while (currentHead != null) {
        if (currentHead.employeeObj.getEmployeeId() == employeeId) {
          prev.next = currentHead.next;
          return true;
        }
        prev = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead == null) {
        System.out.println("Object With Data is not exist");
        return false;
      }

      return true;
    }
  }

  public boolean deleteExistProducts() {
    if (head.employeeObj.getStatus() == "Exist") {
      head = head.next;
      return true;
    } else {
      Node prev = head;
      Node currentHead = head.next;

      while (currentHead != null && currentHead.employeeObj.getStatus() != "Exist") {
        prev = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead != null) {
        prev.next = currentHead.next;
        return true;
      } else
        System.out.println("The List has no element with Exist Status");
        return false;
    }
  }

  public void printEmptyProductList() {
    if (head == null) {
      System.out.println("List is empty");
      return;
    }
    boolean found = false;
    Node temp = head;
    System.out.println("The Shoping centers branches that have Empty products are: ");
    int count = 1;
    while (temp != null) {
      if (temp.employeeObj.getStatus().equals("Empty")) {
        System.out.println(count +". "+temp.employeeObj.toString());
        count++;

        if (!found)
          found = true;
      }
      temp = temp.next;
    }

    if (!found) {
      System.out.println("There is no product in list with empty status");
      return;
    }

  }

  public void printExistProductList() {

    if (head == null) {
      System.out.println("List is empty");
      return;
    }
    boolean found = false;
    Node temp = head;
    System.out.println("The Shoping centers branches that have their products are: ");
    int count = 1;

    while (temp != null) {
      if (temp.employeeObj.getStatus().equals("Exist")) {
        System.out.println(count + ". " + temp.employeeObj.toString());
        count++;
        if (!found)
          found = true;
      }

      temp = temp.next;
    }
    if (found != true) {
      System.out.println("Sorry, there is no product in list with Exist status");
      return;
    }
  }

  public void printProducts(String status) {

    if (head == null) {
      System.out.println("List is empty");
      return;
    }
    System.out.println("The Shoping centers branches that have "+status  +" products are: ");
    boolean found = false;
    Node temp = head;
    int counter = 1;
    while (temp != null) {
      if (temp.employeeObj.getStatus().equals(status)) {
        System.out.println(counter + ". " + temp.employeeObj.toString());
        counter++;

        if (!found)
          found = true;
      }
      temp = temp.next;
    }

    if (!found) {
      System.out.println("There is no product in list with empty status");
      return;
    }

    
  }
}

class Test {
  
  public static void main(String args[]) {
    EmployeeLinkList LL = new EmployeeLinkList(new Employee(1172, "Alaa", "Mohammed", 1, "Elec", "Exist"));

    LL.insertItem(new Employee(3356, "Sultan", "Khalid", 3, "Food", "Exist"));
    LL.insertItem(new Employee(2244, "Raed", "Ali", 2, "Elec", "Empty"));
    LL.insertItem(new Employee(3312, "Ali", "Saber", 3, "Elec", "Empty"));
    LL.insertItem(new Employee(1174, "Fahad", "Ahmed", 1, "Food", "Empty"));
    LL.insertItem(new Employee(4401, "Mohammed", "Anas", 4, "Clean", "Exist"));

    // LL.printList();

    // System.out.println("\n");

    LL.printEmptyProductList();

    System.out.println("\n");

    // LL.printExistProductList();
    System.out.println("\n via method");

    LL.print("Empty");

    System.out.println("\n ALL");
    LL.printList();
  }
}