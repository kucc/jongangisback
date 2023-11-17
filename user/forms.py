from django import forms


class SignupForm(forms.Form):
    user_id = forms.CharField(max_length= 40, required= True)
    password = forms.CharField(widget=forms.PasswordInput, required=True)
    people = forms.IntegerField("사람 수")
    store_id = forms.CharField("가게이름", max_length= 40)
    # soju_quantity = forms.IntegerField("소주 병수")
    # beer_quantity = forms.IntegerField("맥주 병수")
    # makguli_quantity = forms.IntegerField("막거리 병수")
    # alcohol = forms.IntegerField("알코올량")

