from random import randint

# Initialisierung der Anzahl der Listenelemente
print("~ Quicksort-Algorithmus ~\n")
anzahl = int(input("Anzahl an Zahlen: "))

# Erzeugung der Liste
L = []
for i in range(anzahl):
    L = L + [randint(1, 5*anzahl)]

# Sortieralgorithmus - Quicksort
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
print("Unsortiert:\n" + str(L))
L = quicksort(L, 0, len(L)-1)
if anzahl < 52:
    print("." * len(L)*4)
else:
    print()
print("Sortiert:\n" + str(L))