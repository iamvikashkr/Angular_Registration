using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using UserRegAngApp.Models;

namespace UserRegAngApp
{
    /// <summary>
    /// Summary description for Account
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class Account1 : System.Web.Services.WebService
    {

        [WebMethod]
        public object Register(object name)
        {

            User user = Newtonsoft.Json.JsonConvert.DeserializeObject<User>(name.ToString());
            
            var fname = user.fname;
            var mname = user.mname;
            var lname = user.lname;
            var gender = user.gender;
            var dob = user.dob;
            var aadhar = user.aadhar;
            var mobile = user.mobile;
            var address1 = user.address1;
            var address2 = user.address2;
            var city = user.city;
            var district = user.district;
            var pin = user.pin;
            var state = user.state;
            var country = user.country;
            var role = user.role;
            var email = user.email;
            var password = user.password;

             SqlConnection con = new SqlConnection(connectionString: @"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=Test; Integrated Security=SSPI");
            con.Open();

            SqlCommand cmd = new SqlCommand("spReg", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@fname", fname);
            cmd.Parameters.AddWithValue("@mname", mname);
            cmd.Parameters.AddWithValue("@lname", lname);
            cmd.Parameters.AddWithValue("@gender", gender);
            cmd.Parameters.AddWithValue("@dob", dob);
            cmd.Parameters.AddWithValue("@aadhar", aadhar);
            cmd.Parameters.AddWithValue("@mobile", mobile);
            cmd.Parameters.AddWithValue("@address1", address1);
            cmd.Parameters.AddWithValue("@address2", address2);
            cmd.Parameters.AddWithValue("@city", city);
            cmd.Parameters.AddWithValue("@district", district);
            cmd.Parameters.AddWithValue("@pin", pin);
            cmd.Parameters.AddWithValue("@state", state);
            cmd.Parameters.AddWithValue("@country", country);
            cmd.Parameters.AddWithValue("@role", role);
            cmd.Parameters.AddWithValue("@email", email);
            cmd.Parameters.AddWithValue("@password", password);
            cmd.ExecuteNonQuery();
            con.Close();
            return name;

        }
        [WebMethod]
        public object Sign(object name)
        {
            
            SignIn signin = Newtonsoft.Json.JsonConvert.DeserializeObject<SignIn>(name.ToString());

            var email = signin.email;
            var password = signin.password;
            SqlConnection con = new SqlConnection(connectionString: @"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=Test; Integrated Security=SSPI");
            con.Open();

            SqlCommand cmd = new SqlCommand("Select * from tbl where email= '"+ email+"' and password='"+password+"'", con);

            SqlDataReader reader = cmd.ExecuteReader();
            while(reader.Read())
            {
                string sql_fname = Convert.ToString(reader["fname"]);
                string sql_mname= Convert.ToString(reader["mname"]);
                string sql_lname= Convert.ToString(reader["lname"]);
                string sql_gender= Convert.ToString(reader["gender"]);
                string sql_dob= Convert.ToString(reader["dob"]);
                string sql_aadhar= Convert.ToString(reader["aadhar"]);
                string sql_mobile= Convert.ToString(reader["mobile"]);
                string sql_address1= Convert.ToString(reader["address1"]);
                string sql_address2= Convert.ToString(reader["address2"]);
                string sql_city= Convert.ToString(reader["city"]);
                string sql_district= Convert.ToString(reader["district"]);
                string sql_pin= Convert.ToString(reader["pin"]);
                string sql_state= Convert.ToString(reader["state"]);
                string sql_country= Convert.ToString(reader["country"]);
                string sql_role= Convert.ToString(reader["role"]);
                string sql_email= Convert.ToString(reader["email"]);
                string sql_password= Convert.ToString(reader["password"]);

                string[] profile= { sql_fname, sql_mname, sql_lname, sql_gender, sql_dob, sql_aadhar, sql_mobile, sql_address1, sql_address2, sql_city, sql_district, sql_pin, sql_state, sql_country, sql_role, sql_email };

                return profile;
            }
            return "error";

        }
    }
}
