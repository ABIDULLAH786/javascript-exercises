import java.util.LinkedList;

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

  public String toString() {
    return "BranchID: "+ branchID + ", " + "EmpID: "+ employeeID + ", " + "Name: "+ Fname + Lname + ", "  + "ProductType " + productType;
  }
}

class MailList {
  public static void main(String args[]) {
    LinkedList<Employee> ml = new LinkedList<Employee>();

    ml.add(new Employee(1172, "Alaa", "Mohammed", 1, "Elec", "Exist"));
    ml.add(new Employee(3356, "Sultan", "Khalid", 3, "Food", "Exist"));
    ml.add(new Employee(2244, "Raed", "Ali", 2, "Elec", "Empty"));
    ml.add(new Employee(3312, "Ali", "Saber", 3, "Elec", "Empty"));
    ml.add(new Employee(1174, "Fahad", "Ahmed", 1, "Food", "Empty"));
    ml.add(new Employee(4401, "Mohammed", "Anas", 4, "Clean", "Exist"));

    for (Employee element : ml)
      System.out.println(element + "\n");

  }
}