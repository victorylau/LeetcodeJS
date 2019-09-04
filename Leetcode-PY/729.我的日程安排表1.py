from bisect import bisect
class MyCalendar:
    
    def __init__(self):
        self.booked = []

    def book(self, start, end):
        event = (start, end)
        if not self.booked:
            self.booked.insert(0, event)
            return True
        i = bisect(self.booked, event)
        print(i)
        if not i: 
            if end < self.booked[0][0]:
                self.booked.insert(i, event)
                return True
            return False
        elif i == len(self.booked):
            if self.booked[-1][1] <= start:
                self.booked.insert(i, event)
                return True
            return False
        elif self.booked[i-1][1]<=start and end <=self.booked[i][0]:
            self.booked.insert(i,event)
            return True
        return False



# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)

obj = MyCalendar()

print(obj.book(1,2))
obj.book(3,5)
print(obj.book(15,18))
print(obj.book(20,30))

