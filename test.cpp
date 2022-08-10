#include<string.h>
#include<iostream>

using namespace std;

int main()
{
    string date;
    int day;
    cin>>date;

    day = stoi(date.substr(0,2));
    cout<<day;

    return 0;
}