#
# bash script for sending mail via smtp relay
# example:  ./srgSendMailBash.sh mail.telecomguard.ru 25 poshliemail@googlemail.com rsamokhin@telecomguard.ru "Confirmation code" "Your confirmation code is: wqeqwtqtsdasd"
#
( echo open $1  $2
sleep 1
echo helo mail.telecomguard.ru
echo mail from: $3
sleep 1
echo rcpt to: $4
sleep 1
echo data
sleep 1
echo subject: $5
echo
echo $6
sleep 1
echo .
sleep 1
echo quit ) | telnet