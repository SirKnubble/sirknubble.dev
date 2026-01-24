from time import *
from random import randint

# Modus Auswahl
mode = input("Sortieralgorithmus:\n 1: SelectionSort\n 2: InsertionSort\n 3: BubbleSort\n 4: QuickSort\n > ")
mode_printed = False

# SelectionSort
def selectionsort(L):
    size = len(L)
    for step in range(size):
        min_idx = step
        for i in range(step + 1, size):
            if L[i] < L[min_idx]:
                min_idx = i
        (L[step], L[min_idx]) = (L[min_idx], L[step])

# InsertionSort
def insertionsort(L):
    n = len(L)
    i = 1
    while i < n:
        z = L[i]
        j = i
        while (j > 0) and (L[j-1] > z):
            L[j] = L[j-1]
            j = j-1
        L[j] = z
        i = i+1
    return L

# BubbleSort
def bubblesort(L):
    ende = len(L)
    while ende > 0:
        for i in range(0, ende-1):
            # Vergleichen
            if L[i+1] < L[i]:
                # Aufsteigen
                h = L[i]
                L[i] = L[i+1]
                L[i+1] = h
        ende = ende - 1
    return L

# QuickSort
def quicksort(L):
    if L != []:
        pivot = L[0]
        kleinerPivot = []
        groessergleichPivot = []
        for e in L[1:]:
            if e < pivot:
                kleinerPivot = kleinerPivot + [e]
            else:
                groessergleichPivot = groessergleichPivot + [e]
        kleinergPivotSortiert = quicksort(kleinerPivot)
        groessergleichPivotSortiert = quicksort(groessergleichPivot)
        LSortiert = kleinergPivotSortiert + [pivot] + groessergleichPivotSortiert
    else:
        LSortiert = []
    return LSortiert


# Initialisierung der Anzahl der Listenelemente
anzahl = 1000

while anzahl <= 10000:
    # Erzeugung der Liste
    L = []
    for i in range(anzahl):
        L = L + [randint(1, 10*anzahl)]

    # Bestimmung der Rechenzeit beim Sortieren
    t1 = process_time()
    match mode:
        case "1":
            L_sortiert = selectionsort(L)
            if mode_printed == False:
                print("\nSortieralgorithmus: SelectionSort\n")
                mode_printed = True 
        case "2":
            L_sortiert = insertionsort(L)
            if mode_printed == False:
                print("\nSortieralgorithmus: InsertionSort\n")
                mode_printed = True 
        case "3":
            L_sortiert = bubblesort(L)
            if mode_printed == False:
                print("\nSortieralgorithmus: BubbleSort\n")
                mode_printed = True 
        case "4":
            L_sortiert = quicksort(L)
            if mode_printed == False:
                print("\nSortieralgorithmus: QuickSort\n")
                mode_printed = True 
        case _:
            print("Invalid Input")
            break 

    t2 = process_time()
    t = t2 - t1

    # Ausgabe des Messergebnisses
    print("Anzahl der Listenelemente: ", '{0:5}'.format(anzahl), " |  Rechenzeit: ", '{0:.3f}'.format(t), " | Operationen: tbc")

    # Erhoehung der Anzahl der Listenelemente
    anzahl = anzahl + 1000