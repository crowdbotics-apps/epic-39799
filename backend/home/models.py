from django.conf import settings
from django.db import models
class Character(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField(null=True,blank=True,)
    rules = models.ManyToManyField("home.CharacterRule",blank=True,related_name="character_rules",)
class CharacterRule(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
class Board(models.Model):
    'Generated Model'
    sizeX = models.IntegerField()
    sizeY = models.IntegerField(null=True,blank=True,)
    spots = models.ManyToManyField("home.BoardSpot",blank=True,related_name="board_spots",)
class ChessGame(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    startDate = models.DateField(null=True,blank=True,)
    endDate = models.DateField(null=True,blank=True,)
    status = models.CharField(max_length=256,null=True,blank=True,)
    owner = models.ManyToManyField("users.User",blank=True,related_name="chessgame_owner",)
    players = models.ManyToManyField("users.User",blank=True,related_name="chessgame_players",)
    gameTimer = models.IntegerField(null=True,blank=True,)
    timerPerMove = models.IntegerField(null=True,blank=True,)
    gameSetupTime = models.IntegerField(null=True,blank=True,)
    board = models.ManyToManyField("home.Board",blank=True,related_name="chessgame_board",)
    characters = models.ManyToManyField("home.Character",blank=True,related_name="chessgame_characters",)
class BoardSpot(models.Model):
    'Generated Model'
    position = models.IntegerField()
    character = models.ManyToManyField("home.Character",blank=True,related_name="boardspot_character",)
class GameInvitation(models.Model):
    'Generated Model'
    game = models.ManyToManyField("home.ChessGame",related_name="gameinvitation_game",)
    accepted = models.BooleanField()
    sourceInvitation = models.ManyToManyField("users.User",related_name="gameinvitation_sourceInvitation",)
    invitedPlayer = models.ManyToManyField("users.User",related_name="gameinvitation_invitedPlayer",)
    gameColor = models.IntegerField()
