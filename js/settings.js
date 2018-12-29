const app_name = "Gbewonrin";
const developer_url = "https://onlinemedia.com.ng";
const developer_email = "admin@onlinemedia.com.ng";
const supervisor = "OnlineMedia";



//var url = 'http://app.onlinemedia.com.ng/mobileChat/api.php';
let url = "";

let env,server_upload_url,app_path;
env = "locals";

var base_url;

let crossDomain = true;
let ajaxTimeOut = 4500;
let jsonType = "json";

if(env == "local"){
    url = "http://localhost/gbewonrin/api.php";
    base_url = "http://project.apps/gbewonrin";
    server_upload_url = "http://project.apps/cdn/";

}else{
    base_url = "https://projects.onlinemedia.com.ng/gbewonrin";
    url = 'https://projects.onlinemedia.com.ng/gbewonrin/api.php';
    server_upload_url = "https://cdn.uwansell.com.ng/apps/";
}

app_path = "gbewonrin/";
