import requests
ENDPOINT = "https://jsonmock.hackerrank.com/api/movies/search/"


def getMovieTitles(substr):
    """
    :rtype: list
    """
    params = {'Title': substr}
    total_pages = requests.get(ENDPOINT, params=params).json()['total_pages']

    titles = []
    for page in range(1, total_pages+1):
        params = {'Title': substr, 'page': page}
        data = requests.get(ENDPOINT, params=params).json()['data']
        [titles.append(data[i]['Title']) for i in range(len(data))]

    titles.sort()
    return titles


if __name__ == '__main__':
    title = input()
    [print(x) for x in getMovieTitles(title)]
