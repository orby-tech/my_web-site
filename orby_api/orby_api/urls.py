from django.conf.urls import url, include
from django.contrib import admin
from customers import views as cust
from sunny import views as sunny


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^user/', include(('users.urls', 'users'), namespace='users')),
    url('^api/customers/$', cust.customers_list),
    url('^api/customers/(?P<pk>[0-9]+)$', cust.customers_detail),
    url('^sunny/', sunny.answer_service)
]
