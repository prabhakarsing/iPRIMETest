import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material';
import {HttpClient} from '@angular/common/http'
import $ from "jquery"

@Component({
  selector: 'app-login',
  templateUrl: './login.signup.component.html',
  styleUrls: ['./login.signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  name;animal;showbtn;showbtnLgot;username;opened: boolean;
  showHideNavbar:any="";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if(localStorage.getItem("log_check")!=null){
      this.openNav();
      this.showbtn=false;
      this.showbtnLgot=true;
      this.showHideNavbar=true;
      var user=JSON.parse(localStorage.getItem("log_check"))
        this.username=user.userdata[0].firstName

    }
    else
    {
      this.showbtn=true;

    }
    
  }
  login(): void {
    const dialogRef = this.dialog.open(UserLoginComponent, {
      width: '350px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      //alert(result)
      // this.name = result;
    });
  };

  signup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '550px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      //alert(result)
      this.name = result;
    });
  };

  openNav() {
  
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
}

   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
logout(){
  localStorage.clear();
  window.location.href=""
}

}


@Component({
  selector: 'user-login-component',
  templateUrl: 'user-login-component.html',
  providers: [ LoginSignupComponent ]
})

export class UserLoginComponent{
  Email;password

  constructor(
    public dialogRef: MatDialogRef<UserLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data,public http:HttpClient,@Inject(LoginSignupComponent) public lgin ) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  msg1;msg2;tokendata;username
  funLog(ldata){
    if(ldata.valid==true)
    {
      var lginData={email:this.Email,password:this.password}
      this.http.post("/loginApi/login",lginData).subscribe((dt)=>{
        // alert(JSON.stringify(dt))
       this.tokendata=(dt)
       //console.log(this.tokendata)
        this.dialogRef.close()
        window.location.href=""
       
       
        this.lgin.openNav()

        localStorage.setItem("log_check",JSON.stringify(this.tokendata))
        
        if(localStorage.getItem("log_check")!=null)
        {
               this.log_hide();
               this.show_out();   
        }
      })
      alert("Success") 
    }
    else
    {
       this.msg1="* Enter email"
       this.msg2="* Enter password"
    }
  } 
     log_hide(){
       $("#logSin").hide(100)
     }

     show_out(){
      $("#welcome").show(100)
    }
}

/////////////////////////////////////  signin  ///////////////////////////////////////

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./login.signup.component.css']
})
export class SignupComponent {

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data,public http:HttpClient) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  msg1;msg2;msg3;msg4;firstName;lastName;email;password;reenterPassword;msg5;msgg3
  fun1(fdata){
    if(fdata.valid==true)
    {
     var  userdata={firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password}
      this.http.post("/signupApi/register",userdata).subscribe((dt)=>{
        alert(JSON.stringify(dt))
      })
      alert("hello")
      this.dialogRef.close()
    }
    else
    {
      // alert("No")
      this.msg1=" * Enter first name"
      this.msg2=" * Enter last name"
      this.msg3="* Enter email"
      this.msg4="* Enter passord"
      this.msgg3=" * Invalid email id "
      }
  }


  checkPassword(pass){
    if(pass!=this.reenterPassword){
      this.msg5="password not matched"
      
    }

  }
}
