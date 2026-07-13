public import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AddStudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        String email = request.getParameter("email");
        String course = request.getParameter("course");

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(
                    "INSERT INTO students(name,age,email,course) VALUES(?,?,?,?)");

            ps.setString(1, name);
            ps.setInt(2, age);
            ps.setString(3, email);
            ps.setString(4, course);

            ps.executeUpdate();

            response.getWriter().println("Student Added Successfully!");

            con.close();

        } catch(Exception e) {
            e.printStackTrace();
        }

    }

} {
    
}
