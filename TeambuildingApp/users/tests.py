from rest_framework.test import APITestCase
 
from TeambuildingApp.users.models import *
 
'''
class TeamCreateTestCase(APITestCase):
    def test_create_team(self):
        initial_team_count = Team.objects.count()
        team_attrs = {
            'name' : 'New Team'
        }
        response = self.client.post('/api/v1/teams/new', team_attrs)
        if response.status_code != 201:
            print(response.data)
        self.assertEqual(
            Team.objects.count(),
            initial_team_count + 1,
        )
 
        for attr, expected_value in team_attrs.items():
            self.assertEqual(response.data[attr], expected_value)
 
 
class TeamDestroyTestCase(APITestCase):
    def test_destroy_team(self): #it creates a local db so that we can test delete
        initial_team_count = Team.objects.count()
        team_attrs = {
            'name' : 'New Team'
        }
        response = self.client.post('/api/v1/teams/new', team_attrs)
        if response.status_code != 201:
            print(response.data)
        self.assertEqual(
            Team.objects.count(),
            initial_team_count + 1,
        )
 
        initial_team_count = Team.objects.count() 
        team_id = Team.objects.first().id
        self.client.delete('/api/v1/teams/{}'.format(team_id))
        self.assertEqual(
            Team.objects.count(),
            initial_team_count - 1,
        )
 
        self.assertRaises(
            Team.DoesNotExist,
            Team.objects.get, id = team_id,
        )
 
class TeamListTestCase(APITestCase):
    def test_list_teams(self):
        teams_count = Team.objects.count() #cand nu e populat cu valori
        response = self.client.get('/api/v1/teams/')
        self.assertEqual(len(response.data),teams_count)
 
class TeamListTestCaseSec(APITestCase):
 
    def test_list_teams_with_values(self):
        initial_team_count = Team.objects.count()
        team_attrs = {
            'name' : 'New Team'
        }
        response = self.client.post('/api/v1/teams/new', team_attrs)
        if response.status_code != 201:
            print(response.data)
        self.assertEqual(
            Team.objects.count(),
            initial_team_count + 1,
        )
 
        teams_count = Team.objects.count() #cand nu e populat cu valori
        response = self.client.get('/api/v1/teams/')
 
        self.assertEqual(len(response.data),teams_count)
        self.assertIsNotNone(response.data[0]['id'])
        self.assertIsNotNone(response.data[0]['name'])

'''
class TeamUpdateTestCase(APITestCase):
    def test_create_update_team(self):
        initial_team_count = Team.objects.count()
        team_attrs = {
            'name' : 'New Team'
        }
        response = self.client.post('/api/v1/teams/new', team_attrs)
        if response.status_code != 201:
            print(response.data)
        self.assertEqual(
            Team.objects.count(),
            initial_team_count + 1,
        )
        
        team = Team.objects.first()
        team_id = Team.objects.first().id
        print("din nou",)
        print("aici",team)
        response = self.client.patch(
            '/api/v1/teams/{}'.format(team.id),{
                'name': 'Testoase Ninja',
            },
            format = 'json',
        )
    #updated = Team.objects.get(id = team.id)
    #self.assertEqual(updated.name,'Testoase Ninja')