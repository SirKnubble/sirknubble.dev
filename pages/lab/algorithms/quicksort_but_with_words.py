word = input("Word: ")
mode = input("Mode:\n 1: Normal\n 2: Lowercase\n 3: Uppercase\n > ")

def quicksort(L, anfang, ende):
    if L != []:
        pivot = L[anfang]
        links = anfang
        rechts = ende
        while links <= rechts:
            while L[links] < pivot:
                links = links+1
            while L[rechts] > pivot:
                rechts = rechts-1
            if links <= rechts:
                if links < rechts:
                    h = L[links]
                    L[links] = L[rechts]
                    L[rechts] = h
                links = links+1
                rechts = rechts-1
        if anfang < rechts:
            L = quicksort(L, anfang, rechts)
        if links < ende:
            L = quicksort(L, links, ende)
    return L

# Test
match mode:
    case "1":
        L = list(word)
    case "2":
        L = list(word.lower())
    case "3":
        L = list(word.upper())
    case _:
        print("Invalid Input")
        quit()
             
anzahl = len(L)
print("~ Quicksort-Algorithmus ~\n")
print("Unsortiert:\n" + str(L))
L = quicksort(L, 0, len(L)-1)
if anzahl < 52:
    print("." * len(L)*4)
else:
    print()
print("Sortiert:\n" + str(L))