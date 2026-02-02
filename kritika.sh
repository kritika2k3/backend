name="kritika"
age=21

echo "my name is $name"
echo "my age is $age"
echo "Hello everyone"

echo "what's your name"
read name
echo "hello ! $name"


echo "today is $(TZ=Asia/Kolkata date)"

city="mathura"
color="red"

echo "my namee is $kritika and i live in $city and  i like $color colour"

a=3
b=4
c=$a + $b
echo "$c"


count=1
while [$count -le 5]
do
echo "your count is $count"
count=$((count+1))
done

score=91
if [$score -ge 33]
then
echo"you have done well"
else
echo "sorry you failed"
fi



