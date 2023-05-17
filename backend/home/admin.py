from django.contrib import admin
from .models import Board,BoardSpot,Character,CharacterRule,ChessGame,GameInvitation
admin.site.register(Character)
admin.site.register(CharacterRule)
admin.site.register(Board)
admin.site.register(ChessGame)
admin.site.register(BoardSpot)
admin.site.register(GameInvitation)

# Register your models here.
