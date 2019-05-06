import random
import random

def sort(nums):

    for i in range(len(nums)-1):
        minpos = i
        for j in range(i, len(nums)):
            if nums[j] < nums[minpos]:
                minpos = j

        temp = nums[i]
        nums[i] = nums[minpos]
        nums[minpos] = temp
    return nums


nums = [5, 10, 15, 7, 32, 27, 2, 67]
nums2 = [2, 7, 26, 32, 13, 5, 46, 32, 3, 76, 4]
sorted = sort(nums)
print(sort(nums2))
print(sorted)


def die(x):
    return random.randint(1, x)


def diesix():
    return random.randint(1, 6)


print(die(6))
print(diesix())
