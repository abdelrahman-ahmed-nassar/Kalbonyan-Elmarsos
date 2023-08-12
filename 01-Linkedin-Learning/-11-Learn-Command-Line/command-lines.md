use [Cmder]

[clear]  or [cls]  in the bad terminal 
to clear the screen 

always use [tab]

    SS64  for all command  
/*** the directories  ***/

use the command--help for help
the-command /? 
show its syntax and every thing 

=> moving 

[cd]   or chdir    refer to change directory 
[1]cd name-of-file\          go in file 
[1]cd..                      back 
[2]cd /                      back to the root   c:/


******************** [mkdir]  => making directory 

mkdir folder                      just like that and you can made more than one by adding space
mkdir css images js fonts         wow 

mkdir "New file"              when dealing with spaces

mkdir ../testing                  making directory in the parent folder
mkdir c:/react                    making directory in the c:/




************************  [ls] or [dir]   => showing what is inside the directory 

use pwd  to show your path 
represent to print working directory 

ls -a 
to see the hidden files 

ls -l 
to see long information

read   r 
write  w 
execute x

he first three are for the user. 
The next three are for the group. 
And then the last three are for everybody else.

******************* [mv] or [move]  => moving or naming  directory 

move folder folder2
if there is no folder called folder2 it will rename the folder to folder2 
if there is it will move it inside it

move file ..\   back one step

move file \     back to the root 

move folder folder2 

********************* [rename]  ==> rename folder
rename x z 



********************* [cp]  => copy
cp -r the-main-file  the-name-of-the-copied-file 

use -r  if there is something in the folder [recursive]
use -d if the folder is empty 


******************** [rm]   => delete 

rm -r folder      deleting folder 

use -r if there is something in the folder 
use -d if the folder is empty 


=> ********************* [echo]   ==> making a file     

echo "hello" > file.text 
making file and add the text 
if the file is exist it will delete what in it and add "hello"

if you want to append to an existed file 

echo"testing" >> file.text

=>  ******************* [touch] or copy con  in win 

touch index.html 
create file 

=> ******************* [cat]   show what is the content of the file 

cat file 
show the (file) content 
you can show more than one 

cat file file2 file3

cat * 

show all files in the directory 

cat file1-existed > file2-not-existed 

like copy 
cat file >> file2 

take the content of the file1 and append it to file2

cat file file2 file3 file4 file5  > final_destination 

make file have all the content of the other files 


********************  [grep]   global regular expression print 
=> making search 

grep "string"  folder-name 
  show if this string  is in the file or not

grep -n "string"  folder-name 
  show the line number 

grep -l "string"  
  show the files that have that string


grep -r "string" 
  search in the folder it self  search inside the folders in it 

grep -r "string" folder

grep "text" 
search in all system 

// ***********************  command line secrets 

pressing the up arrow 
will give you the last command you have written 

=>  [file] 

file the-name-of-file 
show its type if there is some thing in it 

=> [ctrl c]

stop every thing 

=> [tree /a] 
dhow the full structure of the directory 

=> [tasklist]
show all things opened in the system 

=> [the manual of commands]

move \?

=> [osk]  open screen keyboard 

=> [explorer]

explorer file.text 
open the file like double click 
or just write its name 

=>  [alias] 
creating a shortcut 
alias move=mv 
use 
alias /? 
for more details

=> [whoami]
the user name 

=> [code] 

to open the visual studio code 

=> [&&]

make more than command in one line 

=> [mspaint] 
open micro soft paint 

=> [systeminfo]

=> [>>]
ping elzero.org > ping_for_Elzero.txt 

==> [|]
copy the content of the ipconfig 
ipconfig | clip 



/* commands for the terminal */

code  ==> open vs code 
start chrome  ==> open chrome 
start chrome /incognito
osk  => open screen keyboard 
mspaint  => open=> micro soft paint 
start msedge  => open micro soft edge 
start msedge –inprivate 
start winword => open the micro soft word 
start excel.exestart  open excel 