
function checkIP(event) {
    const form = event.currentTarget;
    const input = document.querySelector('[name=ip]');
    ip = input.value;

    if(!validateIPAddress(ip)) {
        if(form.classList.length == 1) form.classList.add('invalid');
        event.preventDefault();
        return;
    }
    if(form.classList.length > 1) form.classList.remove('invalid');
}


function validateIPAddress(ipaddress) 
{
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    return true
  }
return false
}