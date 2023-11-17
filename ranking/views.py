from django.shortcuts import render
from user.models import User


def ranking_view(request):
    user = request.user
    store_id = user.store_id
    try:
        user_id = user.user_id
        filtered_data = User.objects.filter(store_id=store_id)
        sorted_data = sorted(filtered_data, key = lambda x: x.alcohol, reverse=True)

        current_user_data = User.objects.filter(user_id = user_id).first()

        # 이름, 인원, 알콜, 소, 맥, 막
        top_three_quantities = [
            sorted_data[0].user_id,
            sorted_data[0].people,
            sorted_data[0].alcohol,
            sorted_data[0].soju_quantity,
            sorted_data[0].beer_quantity,
            sorted_data[0].makguli_quantity,

            sorted_data[1].user_id,
            sorted_data[1].people,
            sorted_data[1].alcohol,
            sorted_data[1].soju_quantity,
            sorted_data[1].beer_quantity,
            sorted_data[1].makguli_quantity,

            sorted_data[2].user_id,
            sorted_data[2].people,
            sorted_data[2].alcohol,
            sorted_data[2].soju_quantity,
            sorted_data[2].beer_quantity,
            sorted_data[2].makguli_quantity,

            current_user_data.user_id,
            current_user_data.people,
            current_user_data.alcohol,
            current_user_data.soju_quantity,
            current_user_data.beer_quantity,
            current_user_data.makguli_quantity,
        ]

        context = {
            'top_three_quantities' : top_three_quantities,
        }
        print(context)


    except AttributeError:
        filtered_data = User.objects.filter(store_id=store_id)
        sorted_data = sorted(filtered_data, key = lambda x: x.alcohol, reverse=True)

    # 이름, 인원, 알콜, 소, 맥, 막
        top_three_quantities = [
            sorted_data[0].user_id,
            sorted_data[0].people,
            sorted_data[0].alcohol,
            sorted_data[0].soju_quantity,
            sorted_data[0].beer_quantity,
            sorted_data[0].makguli_quantity,

            sorted_data[1].user_id,
            sorted_data[1].people,
            sorted_data[1].alcohol,
            sorted_data[1].soju_quantity,
            sorted_data[1].beer_quantity,
            sorted_data[1].makguli_quantity,

            sorted_data[2].user_id,
            sorted_data[2].people,
            sorted_data[2].alcohol,
            sorted_data[2].soju_quantity,
            sorted_data[2].beer_quantity,
            sorted_data[2].makguli_quantity,

        ]

        context = {
            'top_three_quantities' : top_three_quantities,
        }
        print(context)

    return render(request, 'ranking.html',context)