from django.conf.urls import url, include
from django.contrib import admin
from customers import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^user/', include(('users.urls', 'users'), namespace='users')),
    url('^api/customers/$', views.customers_list),
    url('^api/customers/(?P<pk>[0-9]+)$', views.customers_detail)
]
