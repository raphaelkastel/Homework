months = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December']
monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
monthstup = ('January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December')
monthdaystup = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
monthsdic = {
    'January': 31,
    'February': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
}
numbanks = 0
accid = 1


def MandDpnt(months, monthdays):
    for months, monthdays in zip(months, monthdays):
        print(months, monthdays)


def MandDpnt2(monthstup, monthdaystup):
    for monthstup, monthdaystup in zip(monthstup, monthdaystup):
        print(monthstup, monthdaystup)


def MandDpnt3(monthsdic):
    for k in monthsdic:
        print(k, monthsdic[k])


def MonthDay(monthname):
    if (monthname == 'January') or (monthname == 'March') or (monthname == 'May') or (monthname == 'July') or (monthname == 'August') or (monthname == 'October') or (monthname == 'December'):
        return 31
    elif (monthname == 'February'):
        return 28
    elif (monthname == 'April') or (monthname == 'June') or (monthname == 'September') or (monthname == 'November'):
        return 30
    else:
        return None


class bank:
    def __init__(self, name, balance, acc):
        global numbanks
        global accid
        self.name = name
        self.balance = balance
        self.acc = accid
        numbanks += 1
        accid += 1

    def getname(self):
        return self.name

    def setname(self, name):
        self.name = name

    def getaccountid(self):
        return self.acc

    def setaccountid(self, accountid):
        self.acc = accountid

    def getbalance(self):
        return self.balance

    def setbalance(self, balance):
        self.balance = balance

    @staticmethod
    def getnumbanks():
        return numbanks


MandDpnt(months, monthdays)
MandDpnt2(monthstup, monthdaystup)
MandDpnt3(monthsdic)
print(MonthDay('September'))
account = bank('bob', accid, 1000)
print(account.getbalance())
account.setbalance(200)
print(account.getbalance())
print(account.name)
account.setname('steve')
print(account.name)
print(account.getnumbanks())
account2 = bank('bob', accid, 1000)
print(account.getnumbanks())
print(account.getaccountid())
print(account2.getaccountid())
