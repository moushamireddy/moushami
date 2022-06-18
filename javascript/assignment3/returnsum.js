arr=[1,2,3];
[1,2,3].map(function square(elem)
{
    return elem*elem;
});

[1,4,9].reduce(function(pre,curr,index,array)
               {
                           return pre+curr;
               },0);