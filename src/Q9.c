#include<stdio.h>
#include<string.h>
int main(int argc,char*argv[])
{	
FILE *source,*target;
char ch;
/*If arguments are less then 3 then give an error*/
if(argc!=3)
{
printf("Command Error!!Insufficient argument givenn");
return;
}
source=fopen(argv[1],"r");
target=fopen(argv[2],"w");
if(source==NULL || target==NULL)
{
printf("Unable to open..ERROR in opening file!!n");
return;
}
while((ch=fgetc(source))!=EOF)
fputc(ch,target);/*writing to the target file*/
printf("Copy is Successful");
fclose(source);
fclose(target);
}
