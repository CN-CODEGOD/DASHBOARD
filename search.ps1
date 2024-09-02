#search 草榴社区
$content = invoke-webrequest "https://t66y.com/thread0806.php?fid=7"
 foreach($link in $content.links) {
    
    $link.innerHTML + "|" + "https://t66y.com/$($link.href)"

 }
