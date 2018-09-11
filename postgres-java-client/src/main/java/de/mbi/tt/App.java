package de.mbi.tt;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        String url = "jdbc:postgresql://mypostgres:5432/docker";
        String user = "docker";
        String password = "docker*";

        try (Connection con = DriverManager.getConnection(url, user, password);
                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery("SELECT VERSION()")) {

            if (rs.next()) {
                System.out.println(rs.getString(1));
            }

        } catch (SQLException ex) {
            // do some stuff
            System.out.println(ex.toString());
        }
    }
}
