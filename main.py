import requests

url = "https://weatherapi-com.p.rapidapi.com/current.json"

querystring = {"q": "Rio de Janeiro"}

headers = {
    "X-RapidAPI-Key": "65d60f25dfmsh6fdf6ccbd0f8f35p1b4c60jsn0399460e321a",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
