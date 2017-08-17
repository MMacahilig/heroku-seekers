function validateFileExtension(file, extns) {
  var value = file[0].value;
  var ext=value.substring(value.lastIndexOf('.')+1);
  return $.inArray(ext, extns) != -1;
}

function validateFileSize(file, maxSize) {
  var component = file[0]
  if(navigator.appName=="Microsoft Internet Explorer")
  {
    if(component.value)
    {
      var oas=new ActiveXObject("Scripting.FileSystemObject");
      var e=oas.getFile(component.value);
      var size=e.size;
    }
  }
  else
  {
    if(component.files[0]!=undefined)
    {
      size = component.files[0].size;
    }
  }
  return !(size!=undefined && size>maxSize)
}
;
