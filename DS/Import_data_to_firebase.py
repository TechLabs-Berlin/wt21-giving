import firebase_admin
from firebase_admin import credentials
cred = credentials.Certificate('/Users/Mariane/Documents/Giving/Firebase/giving-e14dd-firebase-adminsdk-8w03t-2b69e206c4.json')
firebase_admin.initialize_app(cred)
ref = db.reference("https://giving-e14dd-default-rtdb.europe-west1.firebasedatabase.app/")
import json
with open("/Users/Mariane/Documents/Giving/wt21-giving/DS/Charity Navigator/CharityNavigatorTransformed.json", "r") as f:
	file_contents = json.load(f)
ref.set(file_contents)
