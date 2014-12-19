

( echo open mail.telecomguard.ru  25
sleep 1
echo helo mail.telecomguard.ru
echo mail from: $1
sleep 1
echo rcpt to: $2
sleep 1
echo data
sleep 1
echo subject: $3
echo
echo
echo this is a test mail
sleep 1
echo .
sleep 1
echo quit ) | telnet








