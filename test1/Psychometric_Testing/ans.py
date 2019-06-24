def jobOffers(scores, lowerLimits, upperLimits):
    return [sum(lowerLimits[i] <= x <= upperLimits[i] for x in scores) for i in range(len(lowerLimits))]


if __name__ == '__main__':
    n = int(input())
    scores = [int(input()) for i in range(n)]
    q = int(input())
    lowerLimits = [int(input()) for j in range(q)]
    q = int(input())
    upperLimits = [int(input()) for k in range(q)]

    [print(x) for x in jobOffers(scores, lowerLimits, upperLimits)]