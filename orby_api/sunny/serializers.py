from rest_framework import serializers



class sunnySerializer(serializers.ModelSerializer):
		class Meta(object):
				fields = ('text')
